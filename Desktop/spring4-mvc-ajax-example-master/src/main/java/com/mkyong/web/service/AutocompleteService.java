package com.mkyong.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mkyong.web.model.Autocomplete;
import com.mkyong.web.model.AutocompleteBeanInput;

//@Service
public interface AutocompleteService {
	List<Autocomplete> list(AutocompleteBeanInput autocompleteBean, String sourceType);
}
