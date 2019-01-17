#!bin/bash
# pass in the folder path that contains the ebook (i.e. the parent directory to mimetyp, META-INF, OEBPS), and the destination

source_path=$1
destination_path=$2

#zip the mimetype file, 0 compression
zip -0 $destination_path "$source_path/mimetype"

# add the remaining files to the archive, with normal compression
zip -r $destination_path "$source_path/META-INF"
zip -r $destination_path "$source_path/OEBPS"

#rename to .epub file
mv $destination_path "${destination_path%.*}.epub"

#tell the user we are done
echo "Done."