class UsersController < ApplicationController
  def index
    @users = User.all

    render inertia: 'users/Index', props: {
      users: @users
    }
  end

  def show
    @user = User.find(params[:id])

    render inertia: 'users/Show', props: {
      user: @user
    }
  end

  def new
    @user = User.new

    render inertia: 'users/New', props: {
      user: @user
    }
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_path, notice: 'User was successfully created.'
    else
      redirect_to new_user_path, inertia: { errors: user.errors }
    end
  end

  def edit
    @user = User.find(params[:id])
    render inertia: 'users/Edit', props: {
      user: @user
    }
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to users_path, notice: 'User was successfully updated.'
    else
      redirect_to edit_user_path(@user), inertia: { errors: @user.errors }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end