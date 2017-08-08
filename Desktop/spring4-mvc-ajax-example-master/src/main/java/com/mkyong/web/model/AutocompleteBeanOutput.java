package com.mkyong.web.model;

public class AutocompleteBeanOutput {
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 1L;

	private Autocomplete[] outputGroup;
	private String status;

	public Autocomplete[] getOutputGroup() {
		return outputGroup;
	}

	public void setOutputGroup(Autocomplete[] outputGroup) {
		this.outputGroup = outputGroup;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
