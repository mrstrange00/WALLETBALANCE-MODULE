package com.capgemini.WalletBalance.Entity;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name="Balance")
public class BankWallet {
	@Id
	@Column(name="accountId")
int accountId;
@Column(name="accountbalance")
double accountBalance;
public int getAccountId() {
	return accountId;
}

public void setAccountId(int accountId) {
	this.accountId = accountId;
}

public double getAccountBalance() {
	return accountBalance;
}

public void setAccountBalance(double accountBalance) {
	this.accountBalance = accountBalance;
}

public Status getStatus() {
	return status;
}

public void setStatus(Status status) {
	this.status = status;
}

@Enumerated(EnumType.STRING)
@Column(name = "Status")
Status status;

	
}


