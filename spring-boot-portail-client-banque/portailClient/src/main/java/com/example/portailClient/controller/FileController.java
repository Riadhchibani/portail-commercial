package com.example.portailClient.controller;

import java.io.IOException;

import com.example.portailClient.model.ResponseMessage;
import com.example.portailClient.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin(
        origins = "*",
        allowedHeaders = "*",
        maxAge = 4800
)
@RestController

public class FileController {

    @Autowired
    private FileStorageService storageService;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            storageService.uploadToLocalFileSystem(file,file.getOriginalFilename());


            message = "Uploaded the file successfully: " + file.getOriginalFilename();

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping(path = "/files/{imageName}", produces = {MediaType.IMAGE_JPEG_VALUE})
    public byte[] getListFiles(@PathVariable("imageName") String imageName) throws IOException {
        return this.storageService.getImageWithMediaType(imageName, "imgs");
    }

    @DeleteMapping("/deleteImage/{imageName}")
    public void deletePub(@PathVariable("imageName") String imageName) {
        this.storageService.dropFile(imageName);
    }
}
