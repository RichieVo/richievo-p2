// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'image.json';

mRequest.onreadystatechange = function() {
    // Do something interesting if file is opened successfully
    if (mRequest.readyState == 4 && mRequest.status == 200) {
        try {
            // Let’s try and see if we can parse JSON
            mJson = JSON.parse(mRequest.responseText);
            // Let’s print out the JSON; It will likely show as "obj"
            console.log(mJson);

            console.log(mJson.images[0].description);
            console.log(mJson.images[0].imgLocation);
        } catch(err) {
            console.log(err.message)
        }
    }
};

mRequest.open("GET", 'images-short.json', true);
mRequest.send();
