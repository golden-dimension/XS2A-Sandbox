package de.adorsys.ledgers.oba.rest.server.ws.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import static de.adorsys.ledgers.oba.rest.server.ws.Constants.REGISTRY_URL;
import static de.adorsys.ledgers.oba.rest.server.ws.Constants.SUBSCRIPTION_URL;

@Configuration
@EnableWebSocketMessageBroker
@RequiredArgsConstructor
public class SocketBrokerConfig implements WebSocketMessageBrokerConfigurer {
    private final CustomHandshakeHandler handler;
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes("/app")
            .enableSimpleBroker(SUBSCRIPTION_URL);
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(REGISTRY_URL)
            .setAllowedOrigins("*")
            .setHandshakeHandler(handler);
    }
}
