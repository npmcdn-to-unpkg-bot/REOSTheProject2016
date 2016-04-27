<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">
        <link href="bootstrap/dist/css/bootstrap.css" rel="stylesheet" type="text/css">
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
        <link href="css/app.css" rel="stylesheet" type="text/css">

        <!-- 1. Load libraries -->
        <script src="es6-shim/es6-shim.min.js"></script>
        <script src="/systemjs/dist/system-polyfills.js"></script>

        <script src="angular2/bundles/angular2-polyfills.js"></script>
        <script src="systemjs/dist/system.src.js"></script>
        <script src="rxjs/bundles/Rx.js"></script>
        <script src="angular2/bundles/angular2.dev.js"></script>
        <script src="ng2-bootstrap/bundles/ng2-bootstrap.js"></script>

        <!-- 2. Configure SystemJS -->
        <script>
            System.config({
              "defaultJSExtensions": true,
                packages: 
                {
                    app: 
                    {
                        format: 'register',
                        defaultExtension: 'js'
                    }
                },
                map: {
                  moment: 'moment/moment.js'
                }
            });

            System.import('typescript/boot')
                  .then(null, console.error.bind(console));
        </script>
        <base href="/">
    </head>
    <body>
        <my-app>Loading...</my-app>
    </body>
</html>
