<!DOCTYPE html>
<html>
    <head>
        <title>DOM Loaded</title>
        <script type="text/javascript">
            function load() {
                console.log("loaded");
            }
            document.addEventListener("DOMContentLoaded",load);
        </script>
    </head>
    <body>
        <h1>DOMContentLoaded</h1>
    </body>
     
</html>