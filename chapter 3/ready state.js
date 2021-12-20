
  
<!DOCTYPE html>
<html>
    <head>
        <title>Ready State</title>
        <script type="text/javascript">
            if (document.readyState === 'loading') {
                console.log("Document loading");
            }
             if (document.readyState === 'interactive') {
                console.log("interactive");
            } 
            else (document.readyState === 'complete') 
                console.log("Document loaded complete");
            // document.addEventListener('readystatechange', event => {
        </script>
    </head>
    <body>
        <h1>Ready State</h1>
    </body>
     
</html>