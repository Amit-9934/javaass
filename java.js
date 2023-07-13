//Step 1: Create a variable to hold the number of NFTs. We'll use the "number" data type for thislet numberOfNFTs = 10;
let numberOfNFTs = 0;
//Step 2: Create an object inside the mintNFT function to hold the metadata for your NFTs. The m
let nftMetadata = {};

function mintNFT(name, description, image) {
  const newNFT = {
    name: name,
    description: description,
    image: image
  };
//Step 3: Create a listNFTs function that will print all of the NFTs' metadata to the console.
  numberOfNFTs++;
  nftMetadata[numberOfNFTs] = newNFT;
}

function listNFTs() {
  for (let nftId in nftMetadata) {
    const nft = nftMetadata[nftId];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("-------------------");
  }
}
//Step 4: Implement the getTotalSupply function that returns the number of NFTs created.
function getTotalSupply() {
  return numberOfNFTs;
}

mintNFT("NFT 1", "This is the first NFT", "image1.jpg");
mintNFT("NFT 2", "This is the second NFT", "image2.jpg");

listNFTs(); 
console.log("Total NFTs: " + getTotalSupply());
