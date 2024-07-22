package com.minjae.bookbak.config;


import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimplePBEConfig;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.jasypt.salt.RandomSaltGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Configuration
@Component
@PropertySource("classpath:application.properties")
public class JasyptConfig {
    @Autowired
    private Environment environment;

    @Bean("jasyptStringEncryptor")	// 위에서 지정한 빈 이름으로 암호기 생성
    public StringEncryptor stringEncryptor() {
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(environment.getProperty("password"));
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setKeyObtentionIterations("1000");	// 암호화 키를 얻기위해 반복해야하는 해시 횟수
        config.setPoolSize("1");	// 암호화 요청의 pool 크기
        config.setProviderName("SunJCE");
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
        config.setStringOutputType("base64");	//  암호화 이후 어떤 형태로 값 받을지
        ((SimplePBEConfig) config).setSaltGenerator(new RandomSaltGenerator());
        encryptor.setConfig(config);
        return encryptor;
    }
}
