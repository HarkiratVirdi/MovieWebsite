const Jimp = require("jimp");
const path = require("path");
const fs = require("fs");

const compressImage = async(Photo) => {
    try {
        const Ext = Photo.split(".");
        const newImageName = "\public" + Ext[0] + "_edited." + Ext[1];
        if(!fs.existsSync(newImageName))
        {
        const addressOfPhoto = "\public" + Photo;
        const image = await Jimp.read(addressOfPhoto);
        image.resize(Jimp.AUTO, 400);

            image.write(newImageName);
            console.log("Wrote image again", newImageName);
        }else{
            console.log("did not write", newImageName);
        }
        
        return Ext[0] + "_edited." + Ext[1];
    } catch (err) {
        console.log("error", err);
    }
}

module.exports = compressImage;