#!/bin/bash

# Fix all remaining primary color issues to use standard blue
find app components -name "*.tsx" -type f -exec sed -i \
  -e 's/bg-primary-50/bg-blue-50/g' \
  -e 's/bg-primary-100/bg-blue-100/g' \
  -e 's/bg-primary-200/bg-blue-200/g' \
  -e 's/bg-primary-300/bg-blue-300/g' \
  -e 's/bg-primary-400/bg-blue-400/g' \
  -e 's/bg-primary-500/bg-blue-500/g' \
  -e 's/bg-primary-600/bg-blue-600/g' \
  -e 's/bg-primary-700/bg-blue-700/g' \
  -e 's/bg-primary-800/bg-blue-800/g' \
  -e 's/bg-primary-900/bg-blue-900/g' \
  -e 's/text-primary-50/text-blue-50/g' \
  -e 's/text-primary-100/text-blue-100/g' \
  -e 's/text-primary-200/text-blue-200/g' \
  -e 's/text-primary-300/text-blue-300/g' \
  -e 's/text-primary-400/text-blue-400/g' \
  -e 's/text-primary-500/text-blue-500/g' \
  -e 's/text-primary-600/text-blue-600/g' \
  -e 's/text-primary-700/text-blue-700/g' \
  -e 's/text-primary-800/text-blue-800/g' \
  -e 's/text-primary-900/text-blue-900/g' \
  -e 's/hover:text-primary-500/hover:text-blue-500/g' \
  -e 's/hover:text-primary-600/hover:text-blue-600/g' \
  -e 's/hover:text-primary-700/hover:text-blue-700/g' \
  -e 's/hover:bg-primary-500/hover:bg-blue-500/g' \
  -e 's/hover:bg-primary-600/hover:bg-blue-600/g' \
  -e 's/hover:bg-primary-700/hover:bg-blue-700/g' \
  -e 's/hover:bg-primary-800/hover:bg-blue-800/g' \
  -e 's/border-primary-/border-blue-/g' \
  -e 's/from-primary-/from-blue-/g' \
  -e 's/to-primary-/to-blue-/g' \
  {} \;

echo "All primary colors replaced with standard blue colors"
