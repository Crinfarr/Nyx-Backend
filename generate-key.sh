openssl genrsa 2048 > ca-key.pem;
openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem