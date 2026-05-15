# Platform Surfaces

## Releases (gh release)

```bash
# List releases
gh release list

# View latest release
gh release view

# View specific release
gh release view v1.0.0

# View in browser
gh release view v1.0.0 --web

# Create release
gh release create v1.0.0 \
  --notes "Release notes here"

# Create release with notes from file
gh release create v1.0.0 --notes-file notes.md

# Create release with target
gh release create v1.0.0 --target main

# Create release as draft
gh release create v1.0.0 --draft

# Create pre-release
gh release create v1.0.0 --prerelease

# Create release with title
gh release create v1.0.0 --title "Version 1.0.0"

# Upload asset to release
gh release upload v1.0.0 ./file.tar.gz

# Upload multiple assets
gh release upload v1.0.0 ./file1.tar.gz ./file2.tar.gz

# Upload with label (casing sensitive)
gh release upload v1.0.0 ./file.tar.gz --casing

# Delete release
gh release delete v1.0.0

# Delete with cleanup tag
gh release delete v1.0.0 --yes

# Delete specific asset
gh release delete-asset v1.0.0 file.tar.gz

# Download release assets
gh release download v1.0.0

# Download specific asset
gh release download v1.0.0 --pattern "*.tar.gz"

# Download to directory
gh release download v1.0.0 --dir ./downloads

# Download archive (zip/tar)
gh release download v1.0.0 --archive zip

# Edit release
gh release edit v1.0.0 --notes "Updated notes"

# Verify release signature
gh release verify v1.0.0

# Verify specific asset
gh release verify-asset v1.0.0 file.tar.gz
```

## Gists (gh gist)

```bash
# List gists
gh gist list

# List all gists (including private)
gh gist list --public

# Limit results
gh gist list --limit 20

# View gist
gh gist view abc123

# View gist files
gh gist view abc123 --files

# Create gist
gh gist create script.py

# Create gist with description
gh gist create script.py --desc "My script"

# Create public gist
gh gist create script.py --public

# Create multi-file gist
gh gist create file1.py file2.py

# Create from stdin
echo "print('hello')" | gh gist create

# Edit gist
gh gist edit abc123

# Delete gist
gh gist delete abc123

# Rename gist file
gh gist rename abc123 --filename old.py new.py

# Clone gist
gh gist clone abc123

# Clone to directory
gh gist clone abc123 my-directory
```

## Codespaces (gh codespace)

```bash
# List codespaces
gh codespace list

# Create codespace
gh codespace create

# Create with specific repository
gh codespace create --repo owner/repo

# Create with branch
gh codespace create --branch develop

# Create with specific machine
gh codespace create --machine premiumLinux

# View codespace details
gh codespace view

# SSH into codespace
gh codespace ssh

# SSH with specific command
gh codespace ssh --command "cd /workspaces && ls"

# Open codespace in browser
gh codespace code

# Open in VS Code
gh codespace code --codec

# Open with specific path
gh codespace code --path /workspaces/repo

# Stop codespace
gh codespace stop

# Delete codespace
gh codespace delete

# View logs
gh codespace logs

--tail 100

# View ports
gh codespace ports

# Forward port
gh codespace cp 8080:8080

# Rebuild codespace
gh codespace rebuild

# Edit codespace
gh codespace edit --machine standardLinux

# Jupyter support
gh codespace jupyter

# Copy files to/from codespace
gh codespace cp file.txt :/workspaces/file.txt
gh codespace cp :/workspaces/file.txt ./file.txt
```

## Organizations (gh org)

```bash
# List organizations
gh org list

# List for user
gh org list --user username

# JSON output
gh org list --json login,name,description

# View organization
gh org view orgname

# View organization members
gh org view orgname --json members --jq '.members[] | .login'
```

## Search (gh search)

```bash
# Search code
gh search code "TODO"

# Search in specific repository
gh search code "TODO" --repo owner/repo

# Search commits
gh search commits "fix bug"

# Search issues
gh search issues "label:bug state:open"

# Search PRs
gh search prs "is:open is:pr review:required"

# Search repositories
gh search repos "stars:>1000 language:python"

# Limit results
gh search repos "topic:api" --limit 50

# JSON output
gh search repos "stars:>100" --json name,description,stargazers

# Order results
gh search repos "language:rust" --order desc --sort stars

# Search with extensions
gh search code "import" --extension py

# Web search (open in browser)
gh search prs "is:open" --web
```

## Labels (gh label)

```bash
# List labels
gh label list

# Create label
gh label create bug --color "d73a4a" --description "Something isn't working"

# Create with hex color
gh label create enhancement --color "#a2eeef"

# Edit label
gh label edit bug --name "bug-report" --color "ff0000"

# Delete label
gh label delete bug

# Clone labels from repository
gh label clone owner/repo

# Clone to specific repository
gh label clone owner/repo --repo target/repo
```

## SSH Keys (gh ssh-key)

```bash
# List SSH keys
gh ssh-key list

# Add SSH key
gh ssh-key add ~/.ssh/id_rsa.pub --title "My laptop"

# Add key with type
gh ssh-key add ~/.ssh/id_ed25519.pub --type "authentication"

# Delete SSH key
gh ssh-key delete 12345

# Delete by title
gh ssh-key delete --title "My laptop"
```

## GPG Keys (gh gpg-key)

```bash
# List GPG keys
gh gpg-key list

# Add GPG key
gh gpg-key add ~/.ssh/id_rsa.pub

# Delete GPG key
gh gpg-key delete 12345

# Delete by key ID
gh gpg-key delete ABCD1234
```

## Status (gh status)

```bash
# Show status overview
gh status

# Status for specific repositories
gh status --repo owner/repo

# JSON output
gh status --json
```

## Configuration (gh config)

```bash
# List all config
gh config list

# Get specific value
gh config get editor

# Set value
gh config set editor vim

# Set git protocol
gh config set git_protocol ssh

# Clear cache
gh config clear-cache

# Set prompt behavior
gh config set prompt disabled
gh config set prompt enabled
```

## Extensions (gh extension)

```bash
# List installed extensions
gh extension list

# Search extensions
gh extension search github

# Install extension
gh extension install owner/extension-repo

# Install from branch
gh extension install owner/extension-repo --branch develop

# Upgrade extension
gh extension upgrade extension-name

# Remove extension
gh extension remove extension-name

# Create new extension
gh extension create my-extension

# Browse extensions
gh extension browse

# Execute extension command
gh extension exec my-extension --arg value
```

## Aliases (gh alias)

```bash
# List aliases
gh alias list

# Set alias
gh alias set prview 'pr view --web'

# Set shell alias
gh alias set co 'pr checkout' --shell

# Delete alias
gh alias delete prview

# Import aliases
gh alias import ./aliases.sh
```

