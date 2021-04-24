package com.example.portailClient.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;

import com.example.portailClient.model.FileDB;
import com.example.portailClient.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import org.apache.commons.io.IOUtils;

import java.nio.file.Path;
import java.nio.file.StandardCopyOption;


@Service
public class FileStorageService {

    @Autowired
    private FileDBRepository fileDBRepository;

    @Value(value = "${images.path}")
    private String storageDirectoryPath;

    public void uploadToLocalFileSystem(MultipartFile file, String fileName) {

        FileDB fileDB = new FileDB(fileName);
        this.fileDBRepository.save(fileDB);

        Path storageDirectory = Paths.get(storageDirectoryPath + "\\" + "imgs");

        if (!Files.exists(storageDirectory)) {
            try {
                Files.createDirectories(storageDirectory);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        Path destination = Paths.get(storageDirectory.toString() + "\\" + fileName);

        try {
            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public byte[] getImageWithMediaType(String imageName, String subdir)
            throws IOException {
        Path destination = Paths.get(storageDirectoryPath + "\\" + subdir + "\\" + imageName);

        return IOUtils.toByteArray(destination.toUri());
    }

    public void dropFile(String imageName){
        List<FileDB> fileDBList = this.fileDBRepository.findAll();
        FileDB fileDBObj = fileDBList
                .stream()
                .filter(
                        fileDB -> fileDB.getName().equals(imageName)
                )
                .findAny()
                .get();
        Path destination = Paths.get(storageDirectoryPath + "\\" + "imgs" + "\\" + imageName);
        File file = new File(destination.toString());
        file.delete();
        this.fileDBRepository.delete(fileDBObj);
    }
}