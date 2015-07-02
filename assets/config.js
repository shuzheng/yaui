
seajs.config({
  // Set aliases for common libraries
  alias: {
    'jquery': 'jquery-1.7.2.min.js'
  },

  // Add plugins
  //plugins: ['shim'],

  // Configure shim for non-CMD modules
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});