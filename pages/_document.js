import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>React App</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
          <meta name="description" content="Frest admin is super flexible, powerful, clean & modern responsive bootstrap 4 admin template with unlimited possibilities." />
          <meta name="keywords" content="admin template, Frest admin template, dashboard template, flat admin template, responsive admin template, web app" />
          <meta name="author" content="PIXINVENT" />
          <link rel="apple-touch-icon" href="images/ico/apple-icon-120.png" />
          <link rel="shortcut icon" type="image/x-icon" href="images/ico/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="vendors/css/vendors.min.css" />
          <link rel="stylesheet" type="text/css" href="vendors/css/charts/apexcharts.css" />
          <link rel="stylesheet" type="text/css" href="vendors/css/extensions/dragula.min.css" />
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="css/bootstrap-extended.css" />
          <link rel="stylesheet" type="text/css" href="css/colors.css" />
          <link rel="stylesheet" type="text/css" href="css/components.css" />
          <link rel="stylesheet" type="text/css" href="css/themes/dark-layout.css" />
          <link rel="stylesheet" type="text/css" href="css/themes/semi-dark-layout.css" />
          <link rel="stylesheet" type="text/css" href="css/core/menu/menu-types/vertical-menu.css" />
          <link rel="stylesheet" type="text/css" href="css/pages/dashboard-analytics.css" />
          <link rel="stylesheet" type="text/css" href="../../../assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="vendors/js/vendors.min.js"></script>
          <script src="fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
          <script src="fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
          <script src="fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
          <script src="vendors/js/charts/apexcharts.min.js"></script>
          <script src="vendors/js/extensions/dragula.min.js"></script>
          <script src="js/core/app-menu.js"></script>
          <script src="js/core/app.js"></script>
          <script src="js/scripts/components.js"></script>
          <script src="js/scripts/footer.js"></script>
          <script src="js/scripts/pages/dashboard-analytics.js"></script>

        </body>
      </Html>
    );
  }
}
