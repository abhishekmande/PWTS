const str="abcabc"
const map=new Map<string,number>();

for(const each of str)
{
    map.set(each,(map.get(each)||0)+1)
}

let output=""
for(const [each,value] of map)
{
    output+=each+value
}

console.log(output)