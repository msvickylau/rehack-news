require 'jwt'

class Auth
  ALGORITHM = 'HS256'

  # This method will wrap the JWT.encode method that the jwt gem makes available to us. This method takes in three arguments:
    # 1 payload = The data, in the form of a hash
    # 2 secret_key = The key to your hashing algorithm
    # 3 algorithm = The type of hashing algorithm
  def self.issue(payload)
    JWT.encode(
      payload,
      auth_secret,
      ALGORITHM)
  end

  # The Auth.decode method will wrap the JWT.decode method that the jwt gem makes available to us. This method takes in three arguments:
    # The JWT that we want to decode,
    # The hashing algorithm's secret key
    # The type of hashing algorithm
  def self.decode(token)
    JWT.decode(token,
      auth_secret,
      true,
      { algorithm: ALGORITHM }).first
  end

  def self.auth_secret
    ENV["AUTH_SECRET"]
  end
end
