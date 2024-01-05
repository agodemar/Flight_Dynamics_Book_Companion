window.MathJax = {
    // From JSBSim documentation
    tex: {
      tags: 'all',
      packages: {
        '[+]': [
          'base',
          'color',
          'boldsymbol',
          'textmacros'
        ]
      },
      // Configure what delimiters will display math
		  inlineMath: [ ['$', '$'], ['\\(', '\\)'] ],
		  displayMath: [ ['$$', '$$'], ['\\[', '\\]'] ],
      processEscapes: true,
      processEnvironments: true
    },
    loader: {
      load: [
        '[tex]/color',
        '[tex]/boldsymbol',
        '[tex]/textmacros'
      ]
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    },
    chtml: {
      scale: 0.83,   // global scaling factor for all expressions --> blends well with the text font
    }
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })