import {spawn} from 'node:child_process';
const input=process.argv.slice(2); const args=[];
for(let i=0;i<input.length;i++){if(input[i]==='--strictPort')continue;args.push(input[i]==='--host'?'--hostname':input[i]);}
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev',...(args.length?args:['--hostname','0.0.0.0','--port','4173'])],{stdio:'inherit'});
for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));
