import client from './client';


const endpoint = '/listings'
const getListings = () => client.get(endpoint)

const addListing = (listing, onUploadProgress) => {
    //content-type, what type of data we're going to send in a request
    //default content-type is application json
    //multipart/form-data
    //instead of manually setting content-type header, we're going to create a formData()
    const data = new FormData()
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('catergoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) => data.append('images', {
        name: 'image' + index,
        type: 'image/jpeg',
        uri: image
    }));

    if (listing.location)
    data.append('location', JSON.stringify(listing.location))

    

    return client.post(endpoint, data, {
        onUploadProgress: onUploadProgress(progress.loaded / progress.total)
    })
}

export default {
    addListing,
    getListings,
}