package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="login")

public class Model {

	

		@Id
		@Column(length=30)
		private String username;
		@Column(length=10)
		private String password; 
		

		public String getusername() {
			return username;
		}

		public void setusername(String username) {
			this.username = username;
		}

		public String getpassword() {
			return password;
		}

		public void setpassword(String password) {
			this.password = password;
		}

		public Model(String username, String password) {
			super();
			this.username = username;
			this.password = password;
		}

		public Model() 
		{
		
		}
		

	}

