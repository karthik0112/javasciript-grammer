function stageTwo() {
    console.log("Inside Level Two!")
    }
    
    function stageOne() {
    stageTwo()
    }
    
    function main() {
    stageOne()
    }
    main()