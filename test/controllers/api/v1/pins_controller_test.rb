require 'test_helper'

class Api::V1::PinsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_pins_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_pins_create_url
    assert_response :success
  end

end
