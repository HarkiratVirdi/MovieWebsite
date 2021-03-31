const Jimp = require("jimp");
const fs = require("fs");

const compressImage = async(Photo) => {
    try {
        const Ext = Photo.split(".");
        console.log("in compress", Photo);
        
        const newImageName = "public" + Ext[0] + "_edited." + Ext[1];
        if(!fs.existsSync(newImageName))
        {
        const addressOfPhoto = "public" +  Photo;
        const image = await Jimp.read(addressOfPhoto);
        // image.resize(Jimp.AUTO, 200);
            image.quality(25);
            image.write(newImageName);
            console.log("did not Wrote image again", newImageName);
        }else{
            console.log(" wrote", newImageName);
        }
        return Ext[0] + "_edited." + Ext[1];
    } catch (err) {
        console.log("error in compress file", err);
    }
}


module.exports = compressImage;