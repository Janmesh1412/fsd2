// write a js to create folder name AA at temp folder also create a file names temp1.txt iside AA folder now check if working on
// 32 bit platform then print you ar working on win-32 else print win-64
f=require('fs')
o=require('os')
path=o.tmpdir()
p=o.platform()
f.mkdirSync(path+'/BB')
if (p=='win32'){
    f.writeFileSync(path+'/BB/temp1.txt','you are working on win-32')
}
else
{
    f.writeFileSync(path+'/BB/temp1.txt','you are working on win-64')
}