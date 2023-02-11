let head = `
    <meta name="author" content="Niederkorn Damon" />

    <!-- Share OG Tags -->

    <meta property="og:site_name" content="luxformel" />
    <meta property="og:image" content="img/favicon.png" />
    <meta property="og:url" content="https://luxformel.info/" />
    <meta property="og:description" content="Léiert Formelen wei nach nie" />

    <!-- PWA -->

    <meta name="theme-color" content="#7d68f9" />
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="img/favicon.png" />

    <!-- PWA iOS -->

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="luxformel" />

    <!-- iOS Icons -->

    <link rel="apple-touch-icon" sizes="120x120" href="PWA/icons/Icon120.png" />
    <!-- <link rel="apple-touch-icon" sizes="152x152" href="PWA/icons/Icon152.png" />
    <link rel="apple-touch-icon" sizes="167x167" href="PWA/icons/Icon167.png" /> -->
    <link rel="apple-touch-icon" sizes="180x180" href="PWA/icons/Icon180.png" />

    <!-- Favicon -->

    <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

    <!-- Google Fonts -->

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Silkscreen&family=Trispace&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- CSS -->

    <link rel="stylesheet" href="css/resetStyleSheet.css" />
    <link
      id="navStylesheet"
      rel="stylesheet"
      href="css/settings/relativeNav.css"
    />
    <link
      rel="stylesheet"
      id="themeStylesheetLink"
      href="css/Themes/defaultTheme.css"
    />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="temp.css" />`;

document.querySelector("head").innerHTML = head;
