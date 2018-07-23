class ApplicationController < ActionController::API
  before_action :authenticate

  def logged_in?
    !!current_user
  end

  def current_user
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  def authenticate
    render json: {error: "unauthorized"}, status: 404 unless logged_in?
  end

  private

    # First, check to see if our request object has a header, or a key, of ["HTTP_AUTHORIZATION"] and if the value of that header includes a realm designation of Bearer
    def auth_present?
      !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
    end

    # Grab the token out of the value of that header. Then in the auth method, we use our Auth library to decode the token
    def auth
      Auth.decode(token)
    end

    def token
      request.env["HTTP_AUTHORIZATION"].scan(/Bearer (.*)$/).flatten.last
    end

end
