const fs = require("fs")
const path = require("path")


function print(params) {
    console.log(params)
}

//Sample folder
dir= "D:\\New folder\\STUDY"
list =[]
 const files = fs.readdirSync(dir)
//  console.log(files)
files.forEach(file => {
    filePath= path.join(dir, file)
    const stats = fs.statSync(filePath) // Retrieve stats synchronously
    if (stats.isFile()) {
        //console.log(`${file} is a file.`);
        list.push(filePath); // Add the file name to the list
        arrangetofolder(file,filePath, dir)
    }
});
//print(list)

function arrangetofolder(file,filePath,dir){
    const extension = path.extname(file).slice(1);
    // print(extension)
    const newFolder = path.join(dir,extension)
    if (fs.existsSync(newFolder)){
        fs.renameSync(filePath, path.join(newFolder,file))
    }else{
        fs.mkdirSync(newFolder)
        fs.renameSync(filePath, path.join(newFolder,file))
    }
}