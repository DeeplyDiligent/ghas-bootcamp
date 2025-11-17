const js = require('@eslint/js');
const pluginVue = require('eslint-plugin-vue');
const vueParser = require('vue-eslint-parser');
const babelParser = require('@babel/eslint-parser');

module.exports = [
  // Apply recommended rules for all JS files
  js.configs.recommended,
  
  // Apply Vue essential rules
  ...pluginVue.configs['flat/essential'],
  
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: babelParser,
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      },
      globals: {
        // Node environment globals
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        global: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        atob: 'readonly',
        btoa: 'readonly',
        URLSearchParams: 'readonly',
      }
    },
    rules: {
      // Custom rules can be added here
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      },
      globals: {
        // Node environment globals
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        global: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        atob: 'readonly',
        btoa: 'readonly',
        URLSearchParams: 'readonly',
      }
    },
    rules: {
      // Custom rules can be added here
    }
  }
];
