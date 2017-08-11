<%@page session="false"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://journaldev.com/jsp/tlds/mytags" prefix="mytags"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Spring MVC 4 + Ajax Hello World</title>

<c:url var="home" value="/" scope="request" />

<spring:url value="/resources/core/css/hello.css" var="coreCss" />
<spring:url value="/resources/core/css/bootstrap.min.css"
	var="bootstrapCss" />
<spring:url value="/resources/media/css/elements.css"
	var="elementsCss" />
<spring:url value="/resources/core/css/common.css"
	var="commonCss" />
<link href="" rel="stylesheet" />	
<link href="${bootstrapCss}" rel="stylesheet" />
<link href="${commonCss}" rel="stylesheet" />
<link href="${elementsCss}" rel="stylesheet" />
<%-- <link href="${coreCss}" rel="stylesheet" /> --%>

<spring:url value="/resources/core/js/jquery.1.10.2.min.js"
	var="jqueryJs" />
<spring:url value="/resources/core/js/processwelcome.js"
	var="processwelcomeJs" />
<spring:url value="/resources/core/js/common.js"
	var="commonJs" />
<script src="${jqueryJs}"></script>
<script src="${processwelcomeJs}"></script>
<script src="${commonJs}"></script>
</head>

<nav class="navbar navbar-inverse">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">Spring 4 MVC Ajax Hello World</a>
		</div>
	</div>
</nav>

<div class="container" style="min-height: 500px">
	<!-- Custom table start -->
	<label>My autocomplete</label>
								<script id="tbl-96068-template" type="text/template">
																<tr index="0">
																	<td rowspan="1" class="qp-output-fixlength tableIndex result-no-number" style="; ">1</td>
																		<td class='align-left enableGroupTd -1' index="0" style="text-align: left; ;"   >
																<span style="width: 100%; float: left; padding-right: 3px; ">
																							<mytags:custom inputStyle=";;"
																								selectSqlId="QP_ATC_600" name="areaOPRSearch.wh_id"
																								optionValue="output03" optionLabel="output01,output02"
																								onChangeEvent="changeProduct"
																								mustMatch="true" value="" displayValue="">
																							</mytags:custom>
																</span>			
																	</td>
																		
																	<td style='text-align: center;;' rowspan="1">
																		<a class="btn btn-default btn-xs glyphicon glyphicon-minus qp-button-action" title="" onclick="$.qp.removeRowJS('tbl-96068', this) ;" style="margin-top: 3px;" href="javascript:void(0)"></a>
																	</td>
								</script>
						<!--Start Area enable header -->
						<!--End Area enable header -->
									<div class="" style="width: 100%; float:left;" name="areaOPRW_operation_restriction_dtl">
									<div class="panel panel-default qp-div-select form-area-content   ">
											<div class="panel-heading   ">
													<span aria-hidden="true" class="glyphicon qp-heading-icon">&nbsp;</span>
														<span class="qp-heading-text"><qp:message code="sc.6420863058358608059"/></span>
											</div>
											<div class="panel-body project-padding    ">
													<table class="table table-bordered qp-table-list-none-action project-table-list-none-action" id="tbl-96068" style="">
														<colgroup>
																	<col width="21px">
																	<col width="110px"></col>
																	<col width="50px">
														</colgroup>
														<thead>
																			<tr index="0">
																							<th style="text-align: center; ; " >No</th>
																			<th index="0" style=" "   >
																				<label style="cursor: pointer; " class="">area</label>
																			</th>
																					<th width="35px" rowspan="1"></th>
																			</tr>
														</thead>
														<tbody>
																	<c:forEach var="item" items="${oPR_F30InputForm.areaOPRW_operation_restriction_dtl}" varStatus="status">
																							<tr>
																								<td class="qp-output-fixlength tableIndex result-no-number" style="; ">${status.index + 1}</td>
																						<td class='align-left enableGroupTd  ' index="0" style=" "   itemCode= "wh_area_id">
																					<span style="width: 100%; float: left; padding-right: 3px; ">
																							<mytags:custom inputStyle=";;"
																								selectSqlId="QP_ATC_600" name="areaOPRSearch.wh_id"
																								optionValue="output03" optionLabel="output01,output02"
																								onChangeEvent="changeProduct"
																								mustMatch="true" value="" displayValue="">
																							</mytags:custom>
																					</span>
																					</td>
																						<td style='text-align: center; '>
																							<a class="btn btn-default btn-xs glyphicon glyphicon-minus qp-button-action" title="" onclick="$.qp.removeRowJS('tbl-96068', this) ;" style="margin-top: 3px;" href="javascript:void(0)"></a>
																						</td>																									
																			</tr>
																	</c:forEach>
														</tbody>
													</table>
													<div class="qp-add-left">
														<a class="btn btn-default btn-xs glyphicon glyphicon-plus qp-button-action" onclick="$.qp.addRowJSByLink(this) ; $.qp.initialAllPicker($('#96068')); generateEventForCustomAutocomplete();" style="margin-top: 3px;" href="javascript:void(0)"></a>
													</div>
											</div>
										</div>
										</div>
						<!--Start Area enable header -->

	<!-- Custom table end -->
	<div class="starter-template">
		<h1>Search Form</h1>
		<br>

		<div id="feedback"></div>
		
		<form class="form-horizontal" id="search-form">
			<div class="form-group form-group-lg">
				<label class="col-sm-2 control-label">Username</label>
				<div class="col-sm-10">
					<input type=text class="form-control" id="username">
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-sm-2 control-label">Email</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="email">
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" id="bth-search"
						class="btn btn-primary btn-lg">Search</button>
				</div>
			</div>
		</form>

	</div>

</div>

<div class="container">
	<footer>
		<p>
			&copy; <a href="http://www.mkyong.com">Mkyong.com</a> 2015
		</p>
	</footer>
</div>

<script>
	jQuery(document).ready(function($) {

		$("#search-form").submit(function(event) {

			// Disble the search button
			enableSearchButton(false);

			// Prevent the form from submitting via the browser.
			event.preventDefault();

			searchViaAjax();

		});

	});

	function searchViaAjax() {

		var search = {}
		search["username"] = $("#username").val();
		search["email"] = $("#email").val();

		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "${home}search/api/getSearchResult",
			data : JSON.stringify(search),
			dataType : 'json',
			timeout : 100000,
			success : function(data) {
				console.log("SUCCESS: ", data);
				display(data);
			},
			error : function(e) {
				console.log("ERROR: ", e);
				display(e);
			},
			done : function(e) {
				console.log("DONE");
				enableSearchButton(true);
			}
		});

	}

	function enableSearchButton(flag) {
		$("#btn-search").prop("disabled", flag);
	}

	function display(data) {
		var json = "<h4>Ajax Response</h4><pre>"
				+ JSON.stringify(data, null, 4) + "</pre>";
		$('#feedback').html(json);
	}
</script>

</body>
</html>