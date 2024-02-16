## ImageUpload

## Basic Steps

- [ ] set new mongoose Schema Trips
- [ ] Register to Cloudinary (or take Markus DB)
- [ ] Enrich .env.local (or take Markus Link)
- [ ] new structure of datasets in MongoDB (kill or replace datasets with old IMG URL)
- [ ] implement new var width, height, url as prop to CardList and /pages/trips/[id] for clean undistorted rendering
- [ ] (temporarily inactivate renaming to UUID)

## Doing

- [ ] const isImageUrlString: check Image url in handoverData (defaultData?)
- [ ] set useState to default (if !isImageUrlString set default picture string or leave empty?)

### Case 1 handleUploadNoneToImage (default): !isImgUrlString

- [ ] show UploadBox

### UploadBox on change

- [ ] upload to Cloudinary
- [ ] catch to const: image width, height and url
- [ ] update handoverData

## Case 2: handleUploadImageToNone: isImgUrlString

- [ ] show PreviewBox with „Delete Button“

### Click "Delete" Button

- [ ] update handoverData (reset image url, width, height in API Data to "")
- [ ] (Delete Cloudinary Picture)

## Bonus

- [ ] additional alt tag ("Your trip to $destination"))
