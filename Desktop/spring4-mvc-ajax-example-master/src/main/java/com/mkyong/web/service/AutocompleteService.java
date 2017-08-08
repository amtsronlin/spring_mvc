package com.mkyong.web.service;

import java.util.List;

import com.mkyong.web.model.Autocomplete;
import com.mkyong.web.model.AutocompleteBeanInput;

public interface AutocompleteService {
	List<Autocomplete> list(AutocompleteBeanInput autocompleteBean, String sourceType);
}
