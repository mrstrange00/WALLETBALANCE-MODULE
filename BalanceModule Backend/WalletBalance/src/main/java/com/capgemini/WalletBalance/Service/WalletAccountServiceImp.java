package com.capgemini.WalletBalance.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.capgemini.WalletBalance.Entity.BankWallet;
import com.capgemini.WalletBalance.Exception.InvalidAccountException;
import com.capgemini.WalletBalance.Repository.WalletAccountRepository;



@Service
public class WalletAccountServiceImp implements WalletAccountService{
	
	@Autowired 
	WalletAccountRepository walletAccountRepository;
	@Override
	public double getBalance(int accountId) throws InvalidAccountException {
		double balance = 0;
		try {
			balance = walletAccountRepository.findById(accountId).get().getAccountBalance();
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return balance;
	}
	/*@Override
	public BankWallet getAccountInfo(int accountId) throws InvalidAccountException {
		BankWallet accountDetails = null;
		Optional<BankWallet> accountCheck = walletAccountRepository.findById(accountId);
		if(accountCheck!=null) {
		try {
			accountDetails = walletAccountRepository.findById(accountId).get();
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}}
		else throw new InvalidAccountException ("Account does not exist");
		
		return accountDetails;
	}*/
	@Override
	public Optional<BankWallet> getAccountInfo(int accountId) {
		
        Optional<BankWallet> UserObj=walletAccountRepository.findById(accountId);
		
		return UserObj;
	}

}
