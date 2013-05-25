class SessionsController < ApplicationController
  def create
    user = login(params[:email], params[:password], params[:remember_me])
    if user
      # TODO session serializer
      render json: user
    else
      render json: { errors: user }, status: 422
    end
  end

  def destroy
    logout
    render nothing: true
  end
end