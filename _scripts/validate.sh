#!/bin/bash
# Validates oneai-releases repository structure
# Usage: ./_scripts/validate.sh

set -e
ERRORS=0
PRODUCTS=("oneai" "onestack" "onedeploy" "n8n-nodes-oneai" "oneai-teams")

echo "Validating oneai-releases structure..."
echo ""

# Check root files
for file in releases.json README.md LICENSE; do
  if [ ! -f "$file" ]; then
    echo "ERROR: Missing $file"
    ERRORS=$((ERRORS + 1))
  else
    echo "OK: $file exists"
  fi
done

# Validate releases.json is valid JSON
if [ -f releases.json ]; then
  if ! jq empty releases.json 2>/dev/null; then
    echo "ERROR: releases.json is not valid JSON"
    ERRORS=$((ERRORS + 1))
  else
    echo "OK: releases.json is valid JSON"
  fi
fi

echo ""

# Check product directories
for product in "${PRODUCTS[@]}"; do
  if [ ! -d "$product" ]; then
    echo "ERROR: Missing product directory $product/"
    ERRORS=$((ERRORS + 1))
  else
    echo "OK: $product/ directory exists"

    # Check latest.json
    if [ ! -f "$product/latest.json" ]; then
      echo "  ERROR: Missing $product/latest.json"
      ERRORS=$((ERRORS + 1))
    elif ! jq empty "$product/latest.json" 2>/dev/null; then
      echo "  ERROR: $product/latest.json is not valid JSON"
      ERRORS=$((ERRORS + 1))
    else
      echo "  OK: $product/latest.json is valid JSON"
    fi

    # Check README
    if [ ! -f "$product/README.md" ]; then
      echo "  WARN: Missing $product/README.md"
    else
      echo "  OK: $product/README.md exists"
    fi

    # Validate release directories
    for version_dir in "$product"/v*/; do
      [ -d "$version_dir" ] || continue
      version=$(basename "$version_dir")
      echo "  Checking $product/$version..."

      for required in metadata.json changelog_en.md; do
        if [ ! -f "$version_dir/$required" ]; then
          echo "    ERROR: Missing $version_dir$required"
          ERRORS=$((ERRORS + 1))
        else
          echo "    OK: $version_dir$required"
        fi
      done

      # Validate metadata.json
      if [ -f "$version_dir/metadata.json" ]; then
        if ! jq empty "$version_dir/metadata.json" 2>/dev/null; then
          echo "    ERROR: $version_dir/metadata.json is not valid JSON"
          ERRORS=$((ERRORS + 1))
        fi
      fi
    done
  fi
done

echo ""

# Check templates
if [ ! -d "_templates" ]; then
  echo "WARN: Missing _templates/ directory"
else
  echo "OK: _templates/ directory exists"
  for tmpl in changelog_en.md.template changelog_de.md.template developer.md.template summary.md.template metadata.json.template; do
    if [ ! -f "_templates/$tmpl" ]; then
      echo "  WARN: Missing _templates/$tmpl"
    else
      echo "  OK: _templates/$tmpl exists"
    fi
  done
fi

echo ""
if [ $ERRORS -eq 0 ]; then
  echo "All checks passed."
else
  echo "Found $ERRORS error(s)."
  exit 1
fi
