class AnalysisController < ApplicationController
  skip_before_action :verify_authenticity_token

  def softmax
    image_data = softmax_params
    render json: image_data
  end

  private

  def softmax_params
    params.require(:softmax).permit(:data)
  end
end
