document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Search bar
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");

  function handleSearch() {
    const keyword = searchInput.value.trim();
    if (keyword) {
      const results = performSearch(keyword);
      displayResults(results);
    } else {
      searchResults.innerHTML = "Please enter a keyword to search.";
    }
  }

  function performSearch(keyword) {
    const tutorials = [
      {
        title: "HTML Tutorial",
        description: "Learn the tutorials of HTML.",
        url: "home.html",
      },
      {
        title: "HTML Introduction",
        description: "Learn the introduction of HTML.",
        url: "intro.html",
      },
      {
        title: "HTML Basics",
        description: "Learn the basics of HTML.",
        url: "basic.html",
      },
      {
        title: "HTML Elements",
        description: "Learn the elements of HTML.",
        url: "elements.html",
      },
      {
        title: "HTML Attributes",
        description: "Learn the Attributes of HTML.",
        url: "attr.html",
      },
      {
        title: "HTML Headings",
        description: "Learn the Headings of HTML.",
        url: "heading.html",
      },
      {
        title: "HTML Paragraphs",
        description: "Learn the Paragraphs of HTML.",
        url: "pragh.html",
      },
      {
        title: "HTML Formatting",
        description: "Learn the Formatting of HTML.",
        url: "formatting.html",
      },
      {
        title: "HTML Links",
        description: "Learn the Links of HTML.",
        url: "links.html",
      },
      {
        title: "HTML Image",
        description: "Learn the Image of HTML.",
        url: "img.html",
      },
      {
        title: "HTML Tables",
        description: "Learn the Tables of HTML.",
        url: "table.html",
      },
      {
        title: "HTML Lists",
        description: "Learn the Listst of HTML.",
        url: "list.html",
      },
      {
        title: "HTML Block and Inline Elements",
        description: "Learn the Block and Inline Elements of HTML.",
        url: "block.html",
      },
      {
        title: "HTML Div and Inline Elements",
        description: "Learn the Div of HTML.",
        url: "div.html",
      },
      {
        title: "HTML Clasess",
        description: "Learn the Clasess of HTML.",
        url: "class.html",
      },
      {
        title: "HTML ID",
        description: "Learn the ID of HTML.",
        url: "id.html",
      },
      {
        title: "HTML Iframes",
        description: "Learn the Iframes of HTML.",
        url: "iframe.html",
      },
      {
        title: "HTML Layout",
        description: "Learn the Layout of HTML.",
        url: "layout.html",
      },
      {
        title: "HTML Entities",
        description: "Learn the Entities of HTML.",
        url: "entities.html",
      },
      {
        title: "HTML Canvas",
        description: "Learn the Canvas of HTML.",
        url: "canvas.html",
      },
      {
        title: "CSS Home",
        description: "Learn the Home of CSS.",
        url: "homeCSS.html",
      },
      {
        title: "CSS Introduction",
        description: "Learn the Introduction of CSS.",
        url: "introCSS.html",
      },
      {
        title: "CSS Syntax",
        description: "Learn the Syntax of CSS.",
        url: "syntaxCSS.html",
      },
      {
        title: "CSS Selectors",
        description: "Learn the Selectors of CSS.",
        url: "selectors.html",
      },
      {
        title: "CSS Comments",
        description: "Learn the Comments of CSS.",
        url: "commentCSS.html",
      },
      {
        title: "CSS Colors",
        description: "Learn the Colors of CSS.",
        url: "colors.html",
      },
      {
        title: "CSS Backgounds",
        description: "Learn the Backgounds of CSS.",
        url: "background.html",
      },
      {
        title: "CSS Borders",
        description: "Learn the Borders of CSS.",
        url: "border.html",
      },
      {
        title: "CSS Margin",
        description: "Learn the Margin of CSS.",
        url: "margin.html",
      },
      {
        title: "CSS Padding",
        description: "Learn the Padding of CSS.",
        url: "padding.html",
      },
      {
        title: "CSS Padding",
        description: "Learn the Padding of CSS.",
        url: "padding.html",
      },
      {
        title: "CSS Height, Width and Max-width",
        description: "Learn the Height, Width and Max-width of CSS.",
        url: "heightAndwidth.html",
      },
      {
        title: "CSS Outline",
        description: "Learn the Outline of CSS.",
        url: "outline.html",
      },
      {
        title: "CSS Text",
        description: "Learn the Text of CSS.",
        url: "text.html",
      },
      {
        title: "CSS Fonts",
        description: "Learn the Fonts of CSS.",
        url: "font.html",
      },
      {
        title: "CSS Icons",
        description: "Learn the Icons of CSS.",
        url: "icons.html",
      },
      {
        title: "CSS Links",
        description: "Learn the Links of CSS.",
        url: "linksCSS.html",
      },
      {
        title: "CSS Lists",
        description: "Learn the Lists of CSS.",
        url: "listsCSS.html",
      },
      {
        title: "CSS Tables",
        description: "Learn the Tables of CSS.",
        url: "tableCSS.html",
      },
      {
        title: "CSS Display",
        description: "Learn the Display of CSS.",
        url: "display.html",
      },
      {
        title: "CSS Max Width",
        description: "Learn the Max Width of CSS.",
        url: "maxWidth.html",
      },
      {
        title: "CSS Position",
        description: "Learn the Position of CSS.",
        url: "position.html",
      },
      {
        title: "CSS Z-index",
        description: "Learn the Z-index of CSS.",
        url: "z-index.html",
      },
      {
        title: "CSS Overflow",
        description: "Learn the Overflow of CSS.",
        url: "overflow.html",
      },
      {
        title: "CSS Float",
        description: "Learn the Float of CSS.",
        url: "float.html",
      },
      {
        title: "CSS Inline-block",
        description: "Learn the Inline-block of CSS.",
        url: "inline-block.html",
      },
      {
        title: "CSS Align",
        description: "Learn the Align of CSS.",
        url: "align.html",
      },
      {
        title: "CSS Combinators",
        description: "Learn the Combinators of CSS.",
        url: "combinators.html",
      },
      {
        title: "CSS Pseudo-classes",
        description: "Learn the Pseudo-classes of CSS.",
        url: "pseudo-class.html",
      },
      {
        title: "CSS Pseudo-elements",
        description: "Learn the Pseudo-elements of CSS.",
        url: "pseudo-element.html",
      },
      {
        title: "CSS Opacity",
        description: "Learn the Opacity of CSS.",
        url: "opacity.html",
      },
      {
        title: "CSS Vertical Navigation Bar",
        description: "Learn Vertical Navigation Bar of CSS.",
        url: "nav.html",
      },
      {
        title: "CSS Dropdowns",
        description: "Learn Dropdowns of CSS.",
        url: "dropdown.html",
      },
      {
        title: "CSS Attr Selectors",
        description: "Learn Attr Selectors of CSS.",
        url: "attr-selectors.html",
      },
      {
        title: "CSS Forms",
        description: "Learn Forms of CSS.",
        url: "attr-selectors.html",
      },
      {
        title: "CSS WebLayouts",
        description: "Learn WebLayouts of CSS.",
        url: "weblayout.html",
      },
      {
        title: "CSS Math Function",
        description: "Learn Math Function of CSS.",
        url: "mathFunction.html",
      },
      {
        title: "CSS Rounded Corners",
        description: "Learn Rounded Corners of CSS.",
        url: "rounded.html",
      },
      {
        title: "CSS Border Images",
        description: "Learn Border Images of CSS.",
        url: "b-image.html",
      },
      {
        title: "CSS Multiple Backgrounds",
        description: "Learn Multiple Backgrounds Images of CSS.",
        url: "CSSbackground.html",
      },
      {
        title: "CSS Colors",
        description: "Learn Colors of CSS.",
        url: "CSScolors.html",
      },
      {
        title: "CSS Gradients",
        description: "Learn Gradients of CSS.",
        url: "gradient.html",
      },
      {
        title: "CSS Shadow Effects",
        description: "Learn Shadow Effects of CSS.",
        url: "shadow.html",
      },
      {
        title: "CSS Text Effects",
        description: "Learn Text Effects of CSS.",
        url: "t-effact.html",
      },
      {
        title: "CSS Web Fonts",
        description: "Learn Web Fonts of CSS.",
        url: "w-font.html",
      },
      {
        title: "CSS 2D Transforms",
        description: "Learn 2D Transforms of CSS.",
        url: "2d.html",
      },
      {
        title: "CSS 3D Transforms",
        description: "Learn 3D Transforms of CSS.",
        url: "3d.html",
      },
      {
        title: "CSS Transitions",
        description: "Learn 3D Transitions of CSS.",
        url: "transition.html",
      },
      {
        title: "CSS Animations",
        description: "Learn Animations of CSS.",
        url: "animation.html",
      },
      {
        title: "CSS Tooltip",
        description: "Learn Tooltip of CSS.",
        url: "tooltip.html",
      },
      {
        title: "CSS Styling Images",
        description: "Learn Styling Images of CSS.",
        url: "s-img.html",
      },
      {
        title: "CSS Image Reflection",
        description: "Learn Image Reflection of CSS.",
        url: "img-ref.html",
      },
      {
        title: "CSS The object-fit Property",
        description: "Learn The object-fit Property of CSS.",
        url: "object-fit.html",
      },
      {
        title: "CSS The object-position Property",
        description: "Learn The object-position Property of CSS.",
        url: "ob-fit-postion.html",
      },
      {
        title: "CSS Masking",
        description: "Learn Masking of CSS.",
        url: "masking.html",
      },
      {
        title: "CSS Buttons",
        description: "Learn Buttons of CSS.",
        url: "button.html",
      },
      {
        title: "CSS Pagination Examples",
        description: "Learn Pagination Examples of CSS.",
        url: "pagination.html",
      },
      {
        title: "CSS Box Sizing",
        description: "Learn Box Sizing of CSS.",
        url: "boxsizing.html",
      },
      {
        title: "CSS Media Queries",
        description: "Learn Media Queries of CSS.",
        url: "media.html",
      },
      {
        title: "CSS FlexBox",
        description: "Learn FlexBox of CSS.",
        url: "flexbox.html",
      },
      {
        title: "CSS Grid",
        description: "Learn Grid of CSS.",
        url: "grid.html",
      },
      {
        title: "JavaScript Tutorial",
        description: "Learn Tutorial of JavaScript.",
        url: "homeJs.html",
      },
      {
        title: "JavaScript Introduction",
        description: "Learn Introduction of JavaScript.",
        url: "inroJs.html",
      },
      {
        title: "JavaScript Where To",
        description: "Learn Where To of JavaScript.",
        url: "whereTo.html",
      },
      {
        title: "JavaScript Output",
        description: "Learn Output of JavaScript.",
        url: "output.html",
      },
      {
        title: "JavaScript Statements",
        description: "Learn Statements of JavaScript.",
        url: "statment.html",
      },
      {
        title: "JavaScript Syntax",
        description: "Learn Syntax of JavaScript.",
        url: "syntax.html",
      },
      {
        title: "JavaScript Comments",
        description: "Learn Comments of JavaScript.",
        url: "comment.html",
      },
      {
        title: "JavaScript Variables",
        description: "Learn Variables of JavaScript.",
        url: "variable.html",
      },
      {
        title: "JavaScript Let",
        description: "Learn Let of JavaScript.",
        url: "let.html",
      },
      {
        title: "JavaScript Const",
        description: "Learn Const of JavaScript.",
        url: "const.html",
      },
      {
        title: "JavaScript Operators",
        description: "Learn Operators of JavaScript.",
        url: "oprator.html",
      },
      {
        title: "JavaScript DataType",
        description: "Learn DataType of JavaScript.",
        url: "dataType.html",
      },
      {
        title: "JavaScript Functions",
        description: "Learn Functions of JavaScript.",
        url: "function.html",
      },
      {
        title: "JavaScript Object",
        description: "Learn Object of JavaScript.",
        url: "object.html",
      },
      {
        title: "JavaScript Object Properties",
        description: "Learn Object Properties of JavaScript.",
        url: "objectprop.html",
      },
      {
        title: "JavaScript Object Methods",
        description: "Learn Object Methods of JavaScript.",
        url: "objectMethod.html",
      },
      {
        title: "JavaScript Object Display",
        description: "Learn Object Display of JavaScript.",
        url: "objectDisplay.html",
      },
      {
        title: "Object Constructor Functions",
        description: "Learn Object Constructor Functions of JavaScript.",
        url: "objectCo.html",
      },
      {
        title: "JavaScript Events",
        description: "Learn JavaScript Events of JavaScript.",
        url: "event.html",
      },
      {
        title: "JavaScript Strings",
        description: "Learn JavaScript Strings of JavaScript.",
        url: "string.html",
      },
      {
        title: "JavaScript Strings Method",
        description: "Learn JavaScript Strings Method of JavaScript.",
        url: "s-method.html",
      },
    ];

    return tutorials.filter(
      (tutorial) =>
        tutorial.title.toLowerCase().includes(keyword.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  function displayResults(results) {
    if (results.length > 0) {
      let html = "<ul>";
      results.forEach((result) => {
        html += `<li><a href="${result.url}">${result.title}</a>: ${result.description}</li>`;
      });
      html += "</ul>";
      searchResults.innerHTML = html;
    } else {
      searchResults.innerHTML = "No results found.";
    }
  }

  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
