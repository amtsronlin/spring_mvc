package com.mkyong.web.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mkyong.web.model.Autocomplete;
import com.mkyong.web.model.AutocompleteBeanInput;

@Service 
//@Transactional(rollbackFor = Exception.class)
public class AutocompleteServiceImpl implements AutocompleteService {

	@Override
	public List<Autocomplete> list(AutocompleteBeanInput autocompleteBean, String sourceType) {

		List<Autocomplete> list = new ArrayList<Autocomplete>();
		//list = sqlSession.selectList(sourceType, autocompleteInput);
		Autocomplete auto = new Autocomplete();
		auto.setOptionLabel("OptionLabe");
		auto.setOptionValue("OptionValue");
		list.add(auto);
		return list;
	}
}
