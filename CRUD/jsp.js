  // escape, unescape, encodeURI:decodeURI encodeURIComponent:decodeURIComponent
  
  var request = {}; // 네임스페이스 괜히 jsp랑 똑같이 하고픔

  request.getParameter = function (p_name) {
    if (location.href.indexOf("?") == -1) return null;  // 일단 최소한의 안전장치
    var v_queryString = location.href.split("?")[1];
    var v_params = v_queryString.split("&");
    for (var i = 0; i < v_params.length; i++) {
      var v_name = v_params[i].split("=")[0];
      var v_value = v_params[i].split("=")[1];
      
      if (v_name == p_name) {
        // if (v_value.indexOf("+") > -1) {
        //   v_value = v_value.replace("+", " ");
        // }
        return decodeURIComponent(v_value);
      }
    }
    return null;
  }

  // 같은 이름으로 여러개 넘어오는 값 처리
  request.getParameterValues = function (p_name) {
    if (location.href.indexOf("?") == -1) return null;  // 일단 최소한의 안전장치
    var v_queryString = location.href.split("?")[1];
    var v_params = v_queryString.split("&");
    var v_rslt = []; // 여러개를 담을 빈 배열을 준비
    for (var i = 0; i < v_params.length; i++) {
      var v_name = v_params[i].split("=")[0];
      var v_value = v_params[i].split("=")[1];
      
      if (v_name == p_name) {
        v_rslt.push(decodeURIComponent(v_value));
      }
    }
    if (v_rslt.length == 0 ) {  // 찾은 게 없을 때
    return null;  // 찾은 게 없을 때
    }
    return v_rslt; // 배열을 리턴
  }

  // alert(request.getParameterValues("n_skills"));
  var out = {};
  out.print = document.write.bind(document);

  out.print("<h1>석희 못 맞히면 연예인</h1>");