assets_cid = "QmeiDiUv5pTY5fUHKpf2icjFSLP7tBr7pH87phcpP5GEin"
glb_uri="https://gateway.pinata.cloud/ipfs/"+ str(assets_cid) +"/mi777.glb"
desc="The mi777 MiladyMoto Jersey is a Physical + Digital implementation of the beloved Milady Maker Malenciaga jersey trait.\n\n[Model (.glb)](" + glb_uri + ")\n\n"
png_uri="https://gateway.pinata.cloud/ipfs/"+ str(assets_cid) +"/mi777.png"

pinata_gateway="apricot-late-cheetah-409.mypinata.cloud"
tester1="https://" + str(pinata_gateway) + "/ipfs/" + str(assets_cid) + "/mi777.glb"

print(tester1)