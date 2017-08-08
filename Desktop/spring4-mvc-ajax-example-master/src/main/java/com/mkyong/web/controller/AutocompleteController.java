package com.mkyong.web.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mkyong.web.model.Autocomplete;
import com.mkyong.web.model.AutocompleteBeanInput;
import com.mkyong.web.model.AutocompleteBeanOutput;
import com.mkyong.web.service.AutocompleteService;

@Controller
@RequestMapping(value = "Autocomplete")
public class AutocompleteController {
	
	@Autowired
	AutocompleteService autocompleteService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public AutocompleteBeanOutput autocomplete(@RequestParam("parameters") String parameters, Model model) {
		AutocompleteBeanInput param = new AutocompleteBeanInput();
		AutocompleteBeanOutput output = new AutocompleteBeanOutput();
		if (parameters.isEmpty()) {
			output.setStatus("0");
			return output;
		}
		try {
			// convert string json to object
			JsonFactory json = new JsonFactory();
			ObjectMapper mapper = new ObjectMapper(json);

			TypeReference<AutocompleteBeanInput> typeRef = new TypeReference<AutocompleteBeanInput>() {
			};

			try {

				param = mapper.readValue(parameters, typeRef);
				//param.setLanguageId(SessionUtils.getCurrentLanguageId());
			} catch (JsonParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			List<Autocomplete> autocomplete = autocompleteService.list(param, param.getSourceType());

			Autocomplete[] listOutput = autocomplete.toArray(new Autocomplete[autocomplete.size()]);

			output.setOutputGroup(listOutput);
			output.setStatus("1");
		} catch (Exception ex) {
			// ex.printStackTrace();
			return output;
		}
		return output;
	}
}
