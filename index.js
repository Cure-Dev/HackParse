module.exports = function parse(args,bool=[]){
    const parsed = { _:[] }
    function add(k, v) {
        if (parsed[k])
            parsed[k] = [ parsed[k], v ]
        else
            parsed[k] = v
    }

    for(let i=0; i<args.length; i++){

        if (args[i].slice(0,2) == '--'){
            let arg = args[i].slice(2)
            let equal = arg.indexOf('=')

            if (equal != -1 && !bool.includes(arg.slice(0,equal)))
                add(arg.slice(0,equal), arg.slice(equal+1))
            else if (args[i+1] != undefined && args[i+1][0] != '-' && !bool.includes(arg))
                add(arg, args[++i]) //这里真的很巧妙
            else
                add(arg, true)
        }
        
        else if (args[i][0] == '-'){
            let arg = args[i].slice(1)
            let equal = arg.indexOf('=')

            for (let j in arg.slice(0,equal))
                        parsed[arg[j]] = true
            
            if (equal != -1 && !bool.includes(arg[equal-1]))
                add(arg[equal-1], arg.slice(equal+1))
            else if (args[i+1] != undefined && args[i+1][0] != '-' && !bool.includes(arg.slice(-1)))
                add(arg.slice(-1), args[++i])
            else
                add(arg.slice(-1), true)
        }

        else
            parsed._.push(args[i])
    }

    return parsed
}