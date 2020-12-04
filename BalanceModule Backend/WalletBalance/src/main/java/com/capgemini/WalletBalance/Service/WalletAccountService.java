package com.capgemini.WalletBalance.Service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.capgemini.WalletBalance.Entity.BankWallet;
import com.capgemini.WalletBalance.Exception.InvalidAccountException;


@Service
public interface WalletAccountService {
	public double getBalance(int accountId)throws InvalidAccountException;
	public Optional<BankWallet> getAccountInfo(int accountId);
}
