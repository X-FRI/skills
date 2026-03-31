---
name: chart-visualization-mobile-version
description: Use when the user needs a self-contained single-file version of the chart visualization skill for constrained environments such as mobile runtimes, QuickJS hosts, or systems that cannot bundle external reference files.
---

# Chart Visualization Skill Mobile Version

This is a self-contained single-file version of `chart-visualization`.
It is designed for environments where shipping one file is easier than keeping `references/` beside the main skill.

It is still protocol-based:

- choose a chart tool
- shape `{ tool, args }`
- convert the spec into an HTTP POST request
- parse the JSON response

No local JavaScript runtime is required.

## Workflow

### 1. Select the Chart Tool

Use these heuristics to pick the chart tool:

- Time series: `generate_line_chart`, `generate_area_chart`, `generate_dual_axes_chart`
- Comparison: `generate_bar_chart`, `generate_column_chart`, `generate_histogram_chart`
- Part-to-whole: `generate_pie_chart`, `generate_treemap_chart`
- Relationship and flow: `generate_scatter_chart`, `generate_sankey_chart`, `generate_venn_chart`
- Maps: `generate_district_map`, `generate_pin_map`, `generate_path_map`
- Hierarchy and structure: `generate_organization_chart`, `generate_mind_map`
- Specialized:
  - `generate_radar_chart`
  - `generate_funnel_chart`
  - `generate_liquid_chart`
  - `generate_word_cloud_chart`
  - `generate_boxplot_chart`
  - `generate_violin_chart`
  - `generate_network_graph`
  - `generate_fishbone_diagram`
  - `generate_flow_diagram`
  - `generate_spreadsheet`

### 2. Build the Render Spec

Use this shape:

```json
{
  "tool": "generate_line_chart",
  "args": {
    "title": "Revenue Trend",
    "data": [
      { "time": "2026-01", "value": 120 },
      { "time": "2026-02", "value": 135 }
    ]
  }
}
```

Rules:

- `tool` must be one of the tool names documented below.
- `args` must match that tool's schema.

### 3. Convert the Spec into an HTTP Request

Default endpoint:

- `https://antv-studio.alipay.com/api/gpt-vis`

Optional:

- your calling environment may override the endpoint

There are two protocol shapes.

#### Standard Charts

Use this shape for all non-map tools.

Tool to service type mapping:

| tool | type |
| --- | --- |
| `generate_area_chart` | `area` |
| `generate_bar_chart` | `bar` |
| `generate_boxplot_chart` | `boxplot` |
| `generate_column_chart` | `column` |
| `generate_dual_axes_chart` | `dual-axes` |
| `generate_fishbone_diagram` | `fishbone-diagram` |
| `generate_flow_diagram` | `flow-diagram` |
| `generate_funnel_chart` | `funnel` |
| `generate_histogram_chart` | `histogram` |
| `generate_line_chart` | `line` |
| `generate_liquid_chart` | `liquid` |
| `generate_mind_map` | `mind-map` |
| `generate_network_graph` | `network-graph` |
| `generate_organization_chart` | `organization-chart` |
| `generate_pie_chart` | `pie` |
| `generate_radar_chart` | `radar` |
| `generate_sankey_chart` | `sankey` |
| `generate_scatter_chart` | `scatter` |
| `generate_spreadsheet` | `spreadsheet` |
| `generate_treemap_chart` | `treemap` |
| `generate_venn_chart` | `venn` |
| `generate_violin_chart` | `violin` |
| `generate_word_cloud_chart` | `word-cloud` |

Request body:

```json
{
  "type": "line",
  "source": "chart-visualization-creator",
  "...args fields...": "spread from args"
}
```

#### Map Charts

Use this shape for:

- `generate_district_map`
- `generate_pin_map`
- `generate_path_map`

Request body:

```json
{
  "serviceId": "optional-service-id",
  "tool": "generate_district_map",
  "input": {
    "...args fields...": "nested under input"
  },
  "source": "chart-visualization-creator"
}
```

Rules:

- `serviceId` is optional
- keep the original map `tool` value
- put all map args under `input`

### 4. Parse the Response

Check these fields in the response JSON:

- `success`
- `resultObj`
- `errorMessage`

Success handling:

- standard charts usually return the rendered image URL in `resultObj`
- map charts may return a structured `resultObj`
- if a map result contains `content[]`, extract the `text` items

Failure handling:

- if the HTTP status is not 2xx, return the status code and response body
- if `success` is false, return `errorMessage` or `Unknown error`

### 5. Return to the User

Return:

- the image URL or map output text
- the complete `args`
- the exact request body when debugging or replay is useful

## Minimal Example

```http
POST /api/gpt-vis HTTP/1.1
Content-Type: application/json

{
  "type": "line",
  "source": "chart-visualization-creator",
  "title": "Revenue Trend",
  "data": [
    { "time": "2026-01", "value": 120 },
    { "time": "2026-02", "value": 135 }
  ]
}
```

## Complete Tool Reference

### generate_area_chart

Purpose:

- Show value trends over a continuous variable, often time.
- Supports stacking to show accumulated contribution by group.

Required args:

- `data`: array of objects with `time` (string) and `value` (number)
- stacked charts also require `group` (string)

Optional args:

- `stack`: boolean, default `false`
- `style.backgroundColor`: string
- `style.lineWidth`: number
- `style.palette`: string[]
- `style.texture`: `default` or `rough`, default `default`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Keep time formats consistent, such as `YYYY-MM`.
- In stacked mode, every group should cover the same time points.

### generate_bar_chart

Purpose:

- Compare categories with horizontal bars.
- Useful for rankings and grouped regional or channel comparisons.

Required args:

- `data`: array of objects with `category` (string) and `value` (number)
- grouped or stacked charts also require `group` (string)

Optional args:

- `group`: boolean, default `false`
- `stack`: boolean, default `true`
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`, default `default`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Keep category labels short.
- Too many series should be filtered or stacked.

### generate_boxplot_chart

Purpose:

- Show distribution range, quartiles, and outliers by category.

Required args:

- `data`: array of objects with `category` (string) and `value` (number)
- optional `group` (string) for multi-group comparison

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Each category should ideally have at least 5 samples.

### generate_column_chart

Purpose:

- Compare categories or time periods with vertical columns.

Required args:

- `data`: array of objects with `category` (string) and `value` (number)
- grouped or stacked charts also require `group` (string)

Optional args:

- `group`: boolean, default `true`
- `stack`: boolean, default `false`
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- When categories are too many, aggregate or keep only Top-N.

### generate_district_map

Purpose:

- Render a China administrative-region map with coverage or heat values.

Required args:

- `title`: string, required, maximum 16 Chinese characters in the original source guidance
- `data`: object
- `data.name`: string, exact China administrative region keyword

Optional args:

- `data.style.fillColor`: string
- `data.colors`: string[]
- `data.dataType`: `number` or `enum`
- `data.dataLabel`: string
- `data.dataValue`: string
- `data.dataValueUnit`: string
- `data.showAllSubdistricts`: boolean, default `false`
- `data.subdistricts`: array of objects with at least `name`
- `width`: number, default `1600`
- `height`: number, default `1000`

Guidance:

- Region names must be precise to province, city, district, or county level.
- This tool only supports locations in China.

### generate_dual_axes_chart

Purpose:

- Overlay two different series types or scales on one chart.

Required args:

- `categories`: string[]
- `series`: array of objects
- each series needs:
  - `type`: `column` or `line`
  - `data`: number[] with the same length as `categories`

Optional args:

- `series[].axisYTitle`: string
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string

Guidance:

- Best kept to two series.
- Use only when scales or mark types differ meaningfully.

### generate_fishbone_diagram

Purpose:

- Perform root-cause analysis with a fishbone structure.

Required args:

- `data`: object with root `name`
- nested causes go in recursive `children`

Optional args:

- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- Keep hierarchy shallow, ideally no more than 3 levels.

### generate_flow_diagram

Purpose:

- Visualize process flow, review chains, or algorithm steps.

Required args:

- `data`: object
- `data.nodes`: array of node objects with unique `name`
- `data.edges`: array of edge objects with `source` and `target`

Optional args:

- `data.edges[].name`: string
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- Keep node names unique before building edges.

### generate_funnel_chart

Purpose:

- Show conversion or drop-off across stages.

Required args:

- `data`: array of objects in stage order with `category` and `value`

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Keep stage count small, ideally 6 or fewer.

### generate_histogram_chart

Purpose:

- Show the frequency distribution of continuous numeric values.

Required args:

- `data`: number[]

Optional args:

- `binNumber`: number
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Sample size should ideally be at least 30.

### generate_line_chart

Purpose:

- Show trends over time or another continuous axis.

Required args:

- `data`: array of objects with `time` (string) and `value` (number)
- optional `group` for multiple series

Optional args:

- `style.lineWidth`: number
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Align all series to the same time points.
- Use normalized date formats such as `2025-01-01`.

### generate_liquid_chart

Purpose:

- Show a single percent or progress value as a water-level chart.

Required args:

- `percent`: number in `[0, 1]`

Optional args:

- `shape`: `circle`, `rect`, `pin`, or `triangle`, default `circle`
- `style.backgroundColor`: string
- `style.color`: string
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Use one chart per metric.

### generate_mind_map

Purpose:

- Organize a topic into a hierarchical idea map.

Required args:

- `data`: object with root `name` and optional recursive `children`

Optional args:

- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- Keep depth to 3 levels or fewer.

### generate_network_graph

Purpose:

- Show entities and their relationships in a network.

Required args:

- `data`: object
- `data.nodes`: array with unique node `name`
- `data.edges`: array with `source` and `target`

Optional args:

- `data.edges[].name`: string
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- Keep node count readable, often between 10 and 50.

### generate_organization_chart

Purpose:

- Show team or organization hierarchy.

Required args:

- `data`: object with `name`
- optional `description`
- recursive `children`

Optional args:

- `orient`: `horizontal` or `vertical`, default `vertical`
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- Keep depth to about 3 levels.

### generate_path_map

Purpose:

- Show ordered routes across Chinese POIs on a map.

Required args:

- `title`: string, required, maximum 16 Chinese characters in the source guidance
- `data`: array of route objects
- `data[].data`: string[] of ordered Chinese POI names

Optional args:

- `width`: number, default `1600`
- `height`: number, default `1000`

Guidance:

- POI names must be specific and in China.

### generate_pie_chart

Purpose:

- Show part-to-whole contribution as a pie or donut chart.

Required args:

- `data`: array of objects with `category` and `value`

Optional args:

- `innerRadius`: number in `[0, 1]`, default `0`
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Prefer 6 categories or fewer.

### generate_pin_map

Purpose:

- Place multiple POIs on a China map.

Required args:

- `title`: string, required, maximum 16 Chinese characters in the source guidance
- `data`: string[] of Chinese POI names

Optional args:

- `markerPopup.type`: string, fixed as `image`
- `markerPopup.width`: number, default `40`
- `markerPopup.height`: number, default `40`
- `markerPopup.borderRadius`: number, default `8`
- `width`: number, default `1600`
- `height`: number, default `1000`

Guidance:

- Use geographically specific POI names.

### generate_radar_chart

Purpose:

- Compare one or more entities across multiple dimensions.

Required args:

- `data`: array of objects with `name` and `value`
- optional `group` for multiple entities

Optional args:

- `style.backgroundColor`: string
- `style.lineWidth`: number
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Keep dimensions between 4 and 8 when possible.

### generate_sankey_chart

Purpose:

- Show directional flow volume between nodes.

Required args:

- `data`: array of objects with `source`, `target`, and `value`

Optional args:

- `nodeAlign`: `left`, `right`, `justify`, or `center`, default `center`
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Keep node names unique and filter tiny flows if needed.

### generate_scatter_chart

Purpose:

- Show the relationship between two continuous variables.

Required args:

- `data`: array of objects with `x` and `y`
- optional `group`

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Normalize large scale differences before plotting if needed.

### generate_spreadsheet

Purpose:

- Render a regular table or pivot-style spreadsheet image.

Required args:

- `data`: array of objects, one object per row

Optional args:

- `rows`: string[]
- `columns`: string[]
- `values`: string[]
- `theme`: `default` or `dark`
- `width`: number, default `600`
- `height`: number, default `400`

Guidance:

- If `rows` or `values` is provided, the table renders as a pivot-style sheet.
- Field names in `rows`, `columns`, and `values` must match the keys in `data`.

### generate_treemap_chart

Purpose:

- Show hierarchical weights with nested rectangles.

Required args:

- `data`: array of nodes with `name` and `value`
- nested `children` allowed recursively

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Keep values non-negative.
- Parent and child totals should be internally consistent.

### generate_venn_chart

Purpose:

- Show overlap between sets.

Required args:

- `data`: array of objects with `value` and `sets`

Optional args:

- `label`: string
- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Keep set count small, ideally 4 or fewer.

### generate_violin_chart

Purpose:

- Show the density and spread of distributions by category.

Required args:

- `data`: array of objects with `category` and `value`
- optional `group`

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string
- `axisXTitle`: string
- `axisYTitle`: string

Guidance:

- Sample size per category should ideally be at least 30.

### generate_word_cloud_chart

Purpose:

- Highlight keywords using weighted font size.

Required args:

- `data`: array of objects with `text` and `value`

Optional args:

- `style.backgroundColor`: string
- `style.palette`: string[]
- `style.texture`: `default` or `rough`
- `theme`: `default`, `academy`, or `dark`
- `width`: number, default `600`
- `height`: number, default `400`
- `title`: string

Guidance:

- Remove stop words and merge synonyms before rendering.

## Notes for Mobile and Constrained Runtimes

- This file is self-contained and does not require the `references/` directory.
- It does not require Node.js.
- It works best when your environment can:
  - build JSON
  - issue HTTP POST requests
  - parse JSON responses
- If your host provides only a minimal `fetch`, keep the integration simple and avoid assuming browser APIs beyond basic request and response handling.
