package com.capgemini.WalletBalance.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.capgemini.WalletBalance.Entity.BankWallet;
@Repository("walletAccountRepository")
public interface WalletAccountRepository extends JpaRepository<BankWallet, Integer>{
	
}
