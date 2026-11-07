import nextConfig from 'eslint-config-next/core-web-vitals'
import tsConfig from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = [
  { ignores: ['.claude/', '.agents/', '.omc/', '.next/', 'out/'] },
  ...nextConfig,
  ...tsConfig,
  prettierConfig,
]

export default eslintConfig
