---
name: chart-visualization
description: Use when the user wants to turn structured data into a chart image or map by selecting a chart type, shaping arguments from the chart references, and issuing an HTTP request to the chart rendering service.
---

# Chart Visualization Skill

This skill turns structured data into chart or map render requests.
It is protocol-based: any environment that can make HTTP POST requests can execute it.

## Workflow

To visualize data, follow these steps:

### 1. Intelligent Chart Selection
Analyze the user's data features to determine the most appropriate chart type. Use the following guidelines (and consult `references/` for detailed specs):

- **Time Series**: Use `generate_line_chart` (trends) or `generate_area_chart` (accumulated trends). Use `generate_dual_axes_chart` for two different scales.
- **Comparisons**: Use `generate_bar_chart` (categorical) or `generate_column_chart`. Use `generate_histogram_chart` for frequency distributions.
- **Part-to-Whole**: Use `generate_pie_chart` or `generate_treemap_chart` (hierarchical).
- **Relationships & Flow**: Use `generate_scatter_chart` (correlation), `generate_sankey_chart` (flow), or `generate_venn_chart` (overlap).
- **Maps**: Use `generate_district_map` (regions), `generate_pin_map` (points), or `generate_path_map` (routes).
- **Hierarchies & Trees**: Use `generate_organization_chart` or `generate_mind_map`.
- **Specialized**:
    - `generate_radar_chart`: Multi-dimensional comparison.
    - `generate_funnel_chart`: Process stages.
    - `generate_liquid_chart`: Percentage/Progress.
    - `generate_word_cloud_chart`: Text frequency.
    - `generate_boxplot_chart` or `generate_violin_chart`: Statistical distribution.
    - `generate_network_graph`: Complex node-edge relationships.
    - `generate_fishbone_diagram`: Cause-effect analysis.
    - `generate_flow_diagram`: Process flow.
    - `generate_spreadsheet`: Tabular data or pivot tables for structured data display and cross-tabulation.

### 2. Parameter Extraction
Once a chart type is selected, read the corresponding file in the `references/` directory (e.g., `references/generate_line_chart.md`) to identify the required and optional fields.
Extract the data from the user's input and map it to the expected `args` format.

### 3. Create the Render Spec
Build a render spec in the following format:

```json
{
  "tool": "generate_chart_type_name",
  "args": {
    "data": [...],
    "title": "...",
    "theme": "...",
    "style": { ... }
  }
}
```

`tool` must be one of the chart reference names. `args` must match that tool's reference file.

### 4. Convert the Spec into an HTTP Request
Send the request to the render service endpoint:

- Default endpoint: `https://antv-studio.alipay.com/api/gpt-vis`
- Optional override: set another endpoint in your calling environment if needed

There are two request shapes.

#### A. Standard charts
Use this shape for all non-map tools:

- `generate_area_chart`
- `generate_bar_chart`
- `generate_boxplot_chart`
- `generate_column_chart`
- `generate_dual_axes_chart`
- `generate_fishbone_diagram`
- `generate_flow_diagram`
- `generate_funnel_chart`
- `generate_histogram_chart`
- `generate_line_chart`
- `generate_liquid_chart`
- `generate_mind_map`
- `generate_network_graph`
- `generate_organization_chart`
- `generate_pie_chart`
- `generate_radar_chart`
- `generate_sankey_chart`
- `generate_scatter_chart`
- `generate_spreadsheet`
- `generate_treemap_chart`
- `generate_venn_chart`
- `generate_violin_chart`
- `generate_word_cloud_chart`

Map `tool` to the service `type` using this table:

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

Example:

```json
{
  "type": "line",
  "source": "chart-visualization-creator",
  "title": "Revenue Trend",
  "data": [
    { "time": "2026-01", "value": 120 },
    { "time": "2026-02", "value": 135 }
  ],
  "theme": "default"
}
```

#### B. Map charts
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

Notes:

- `serviceId` is optional.
- For map tools, keep the original `tool` name. Do not convert it to `type`.
- The chart arguments go under `input`, not at the top level.

### 5. Parse the Response
The service returns JSON. Check:

- `success`: boolean
- `resultObj`: success payload
- `errorMessage`: failure detail when present

Success handling:

- For standard charts, `resultObj` is typically the rendered image URL.
- For map charts, `resultObj` may be structured content. If it contains `content[]`, extract text items and return them. Otherwise return the raw `resultObj`.

Failure handling:

- If the HTTP status is not 2xx, return the status code and response body.
- If `success` is false, return `errorMessage` or `Unknown error`.

### 6. Result Return
Return the following to the user:

- The image URL.
- The complete `args` used for generation.
- The exact request body used to call the service when useful for debugging or replay.

## Minimal Request Template
Use any HTTP client. Example request:

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

## Reference Material
Detailed specifications for each chart type are located in the `references/` directory. Consult these files to ensure the `args` in the render spec match the expected schema.
