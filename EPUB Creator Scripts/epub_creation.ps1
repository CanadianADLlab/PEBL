# accept command line arguments
param (
    [string]$source_path
    [string]$destination_path
)

# add the mimetype file to the archive with no compression
Compress-Archive -Path $source_path'\mimetype' -DestinationPath $destination_path -CompressionLevel NoCompression

# add the remaining files and folders to the archive, with normal compression
Compress-Archive -Path $source_path'\META-INF' -Update -DestinationPath $destination_path
Compress-Archive -Path $source_path'\OEBPS' -Update -DestinationPath $destination_path

#rename to .epub file
$destination_path | rename-item -newname {[io.path]::ChangeExtension($_.name, "epub")}