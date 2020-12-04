package com.capgemini.WalletBalance.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.WalletBalance.Entity.BankWallet;
import com.capgemini.WalletBalance.Exception.InvalidAccountException;
import com.capgemini.WalletBalance.Service.WalletAccountService;


@RestController
@CrossOrigin(origins="http://localhost:4200")//enabling resource sharing
@RequestMapping("/balance")     
public class WalletController {
	@Autowired
    private WalletAccountService walletAccountService;
	/*	this method will take accountId from the url and pass the accountId to the
	 * getBalance method in service class
	 */
	@GetMapping("/getBalance/{accountId}")
	 double getBalance(@PathVariable int accountId) throws InvalidAccountException {
		System.out.println(accountId);
		double balance = 0;
		try {
			balance = walletAccountService.getBalance(accountId);
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return balance;
	}
	/*	this method will take accountId from the url and pass the accountId to the
	 * getAccountInfo method in service class
	 */
	@GetMapping("/getAccountInfo/{accountId}")

		public Optional<BankWallet>  getAccountInfo(@PathVariable int accountId) throws InvalidAccountException{
		{
			System.out.println(accountId);
			Optional<BankWallet> b = walletAccountService.getAccountInfo(accountId);
			if (!b.isPresent())
				throw new InvalidAccountException("this is an invalid id !!");
			return b;
	}
	}}
