
var [args,argv,operations] = process.argv.slice(2);

args=Number(args);
argv=Number(argv);


switch(operations){
    case "add":console.log("Addition is",args+argv)
    break;
    case "sub":console.log("Subtraction is",args-argv)
    break;
    case "div":console.log("Division is",args/argv)
    break;
    case "mul":console.log("Multiplication is",args*argv)
    break;
    case "sin":console.log("sin value is",Math.sin(args,argv))
    break;
    case "cos":console.log("cos value is",Math.cos(args,argv))
    break;
    case "tan":console.log("tan value is",Math.tan(args,argv))
    break;

    default:console.log("Enter a case");
}


